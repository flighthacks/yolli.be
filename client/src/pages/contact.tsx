import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Naam is verplicht"),
  email: z.string().email("Ongeldig emailadres"),
  phone: z.string().min(10, "Geldig telefoonnummer vereist"),
  message: z.string().min(10, "Bericht moet minstens 10 tekens bevatten"),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast.success("Bericht verzonden!", {
        description: "We nemen zo snel mogelijk contact met u op."
      });
      form.reset();
    },
    onError: () => {
      toast.error("Er is iets misgegaan", {
        description: "Probeer het later opnieuw of bel ons rechtstreeks."
      });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    contactMutation.mutate(values);
  }

  return (
    <Layout>
      <div className="bg-primary/20 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Contact</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-hand">
            "Kleinschalige, huiselijke kinderopvang die staat voor: rust en regelmaat waarin het kleine kind kan gedijen."
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-display font-bold">Contactgegevens</h2>
              <div className="space-y-4">
                <Card className="border-none shadow-md bg-white/50">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="bg-primary/20 p-3 rounded-full text-primary-foreground/80">
                      <MapPin size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Adres</p>
                      <p className="text-muted-foreground">Koersdreef 88, 2990 Gooreind - Wuustwezel, Belgie</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md bg-white/50">
                   <CardContent className="flex items-center gap-4 p-6">
                    <div className="bg-secondary/50 p-3 rounded-full text-secondary-foreground">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Bel</p>
                      <p className="text-muted-foreground">03 633 13 75</p>
                      <p className="text-muted-foreground">GSM 0498 39 53 53</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md bg-white/50">
                   <CardContent className="flex items-center gap-4 p-6">
                    <div className="bg-accent/50 p-3 rounded-full text-accent-foreground">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Mail</p>
                      <p className="text-muted-foreground">info@yolli.be</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-2xl space-y-4">
              <div>
                 <h3 className="font-bold mb-2">Locatie</h3>
                 <p className="text-sm text-muted-foreground mb-4">
                   Yolli is gelegen op het kruispunt tussen de gemeentes van Heide (6,5 km), Kalmthout (6,6 km), Brasschaat (7,5 km) en Wuustwezel (8km). In een rustige dreef op de grens tussen Gooreind en Brasschaat (Maria-ter- Heide). Een oprijlaantje leidt je naar het huis dat 70m achterin gelegen is, dus rustig en weg van de straatkant. We zitten te midden van bos en weilanden.
                 </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Bank & Verzekering</h3>
                <p className="text-sm text-muted-foreground">Bankrekening nr: BE14 7350 4272 8383</p>
                <p className="text-sm text-muted-foreground">Verzekering Allianz NCN400223081</p>
                <p className="text-sm text-muted-foreground">Ondernemingsnummer: 0650.702.823</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card p-8 rounded-3xl shadow-lg border border-border/50">
            <h2 className="text-2xl font-display font-bold mb-6">Contacteer Yolli</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Naam (verplicht)</FormLabel>
                      <FormControl>
                        <Input placeholder="Uw naam" {...field} className="bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email (verplicht)</FormLabel>
                      <FormControl>
                        <Input placeholder="uw@email.com" {...field} className="bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefoon (verplicht)</FormLabel>
                      <FormControl>
                        <Input placeholder="04..." {...field} className="bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Uw Bericht</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Uw vraag of bericht..." {...field} className="bg-background min-h-[120px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full rounded-full font-bold text-lg h-12 cursor-pointer"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Verzenden..." : "Verstuur"} 
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

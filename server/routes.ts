import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getUncachableResendClient } from "./resend";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(10),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);
      
      const { client, fromEmail } = await getUncachableResendClient();
      
      await client.emails.send({
        from: fromEmail,
        to: "info@yolli.be",
        subject: `Nieuw contactbericht van ${data.name}`,
        html: `
          <h2>Nieuw contactformulier bericht</h2>
          <p><strong>Naam:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Telefoon:</strong> ${data.phone}</p>
          <p><strong>Bericht:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        `,
      });
      
      res.json({ success: true, message: "Email verzonden" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Er is een fout opgetreden bij het verzenden van het bericht" 
      });
    }
  });

  return httpServer;
}

import { NextResponse } from "next/server";
import transporter from "../../src/lib/transporter";

export async function POST(request) {
  const { name, companyName, email, message } = await request.json();

  const mailOptions = {
    from: email,
    to: process.env.USER_EMAIL,
    subject: `Nouveau message de ${name} ${companyName && `, ${companyName}`}`,
    text: `
      Nom: ${name}
      Email: ${email}
      Entreprise: ${companyName}
      Message: ${message}
    `,
    html: `<p><strong>Nom</strong> : ${name}</p>
           <p><strong>Entreprise</strong> : ${companyName}</p>
           <p><strong>Email</strong> : ${email}</p>
           <p><strong>Message</strong> : ${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Formulaire soumis avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { message: "Erreur lors de l'envoi de l'email." },
      { status: 500 }
    );
  }
}

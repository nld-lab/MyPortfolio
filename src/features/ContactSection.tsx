import { useState, type FormEvent } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Mail, Phone, Send } from "lucide-react";
import { BlurFade } from "../components/ui/blur-fade";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "../components/ui/field";
import { Input } from "../components/ui/input";
import { Spinner } from "../components/ui/spinner";
import { Textarea } from "../components/ui/textarea";

const contactLinks = [
  {
    label: "Email",
    value: "nicolasdeteh@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=nicolasdeteh@gmail.com",
    icon: Mail,
  },
  {
    label: "Téléphone",
    value: "+228 70 34 82 70",
    href: "tel:+22870348270",
    icon: Phone,
  },
  {
    label: "GitHub",
    value: "github.com/nld-lab",
    href: "https://github.com/nld-lab",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nicolas-deteh",
    href: "https://www.linkedin.com/in/nicolas-deteh-b88571374/",
    icon: FaLinkedin,
  },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY ?? "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setMessage("Message envoyé avec succès. Je vous répondrai bientôt.");
        form.reset();
      } else {
        setStatus("error");
        setMessage("Une erreur est survenue. Réessayez plus tard.");
      }
    } catch {
      setStatus("error");
      setMessage("Impossible d'envoyer le message. Vérifiez votre connexion.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full flex flex-col items-center justify-center "
    >
      <div className="w-full max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <BlurFade inView delay={0.1} className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Me contacter</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
            Une idée, un projet ou une opportunité ? Écrivez-moi ou rejoignez-moi
            sur mes réseaux.
          </p>
        </BlurFade>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.2fr] ">
          <BlurFade inView delay={0.15} direction="right" className="space-y-4">
            <Card className="border-border/70 bg-background/70 shadow-lg shadow-black/5">
              <CardHeader>
                <CardTitle className="text-xl">Informations de contact</CardTitle>
                <CardDescription>
                  Retrouvez-moi rapidement via ces canaux.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/80 p-3 transition-colors hover:border-primary/40 hover:bg-primary/5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="truncate text-sm font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}

                <Button asChild className="mt-2 w-full rounded-full py-5" >
                  <a
                    href="https://wa.me/22897310889?text="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp />
                    WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </BlurFade>

          <BlurFade inView delay={0.25} direction="left">
            <Card className="border-border/70 bg-background/70 shadow-lg shadow-black/5">
              <CardHeader>
                <CardTitle className="text-xl">Envoyer un message</CardTitle>
                <CardDescription>
                  Remplissez le formulaire et je vous répondrai dès que possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit}>
                  <FieldGroup>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field>
                        <FieldLabel htmlFor="name">Nom</FieldLabel>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Votre nom"
                          required
                          className="h-10"
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="vous@email.com"
                          required
                          className="h-10"
                        />
                      </Field>
                    </div>

                    <Field>
                      <FieldLabel htmlFor="subject">Sujet</FieldLabel>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Sujet du message"
                        required
                        className="h-10"
                      />
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="message">Message</FieldLabel>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Parlez-moi de votre projet..."
                        required
                        className="min-h-36"
                      />
                    </Field>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-full sm:w-auto"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? (
                        <>
                          <Spinner />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send />
                          Envoyer le message
                        </>
                      )}
                    </Button>

                    {message && (
                      <p
                        className={
                          status === "success"
                            ? "text-sm text-green-600 dark:text-green-400"
                            : "text-sm text-destructive"
                        }
                        role="status"
                      >
                        {message}
                      </p>
                    )}
                  </FieldGroup>
                </form>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Gift } from "lucide-react";
import logo from "@/assets/logo-achadinhos-luh-beleza.png";
import cena from "@/assets/luh-beleza-cena.png";
import telegram from "@/assets/telegram.svg";

// TODO: substituir pelo link real do canal de beleza
const GROUP_URL = "https://t.me/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Achadinhos da Luh Beleza — Canal de promoções" },
      { name: "description", content: "Receba achadinhos, promoções e descontos em maquiagem, perfumes e skincare. 100% gratuito." },
      { property: "og:title", content: "Achadinhos da Luh Beleza" },
      { property: "og:description", content: "Seus produtos de beleza favoritos por muito menos! Entre no canal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="luh-page min-h-screen font-display text-luh-ink">
      <div className="mx-auto flex max-w-md flex-col items-center px-5 pb-10 pt-4 text-center">
        <h1 className="w-full">
          <img
            src={logo}
            alt="Achadinhos da Luh Beleza"
            className="luh-fade -mx-5 w-[calc(100%+2.5rem)] max-w-none"
            width={870}
            height={320}
          />
        </h1>

        <img
          src={cena}
          alt="Luh piscando cercada de perfume, batom, creme e pincel de maquiagem"
          className="luh-fade -mx-5 mt-4 w-[calc(100%+2.5rem)] max-w-none"
          width={795}
          height={530}
        />

        <h2 className="-mt-2 text-2xl font-extrabold italic leading-snug">
          Seus produtos de beleza favoritos por{" "}
          <span className="inline-block -rotate-1 rounded-lg bg-luh-pink px-2">muito menos!</span>
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-luh-ink-muted">
          <Gift className="mr-1.5 inline h-5 w-5 -translate-y-0.5 text-luh-pink-soft" />
          Receba achadinhos, promoções e descontos em maquiagem, perfumes, skincare e muito mais!
        </p>

        <a
          href={GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="luh-cta animate-luh-pulse mt-7 flex w-full items-center justify-center gap-3 rounded-full py-4 text-lg font-bold tracking-wide"
        >
          <img src={telegram} alt="" className="h-7 w-7" />
          ENTRAR NO CANAL
        </a>

        <p className="mt-4 flex items-center gap-2 text-sm text-luh-ink-muted">
          <CheckCircle2 className="h-5 w-5 text-luh-pink-soft" />
          100% gratuito • Acesso imediato
        </p>
      </div>
    </main>
  );
}

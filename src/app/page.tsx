import Headline from "@/app/_components/home/Headline";
import Menu from "./_components/home/Menu";
import ContactUs from "./_components/home/ContactUs";
import Testimony from "./_components/home/Testimony";
import FrequentlyAskedQuestions from "./_components/home/FrequentlyAskedQuestions";
import JoinCommunity from "./_components/home/JoinCommunity";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Headline />
      <Menu />
      <ContactUs />
      <Testimony />
      <FrequentlyAskedQuestions />
      <JoinCommunity />
    </main>
  );
}

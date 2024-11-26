/** SECTIONS */
import ContactUs from "./_sections/ContactUs";
import Headline from "./_sections/Headline";
import Menu from "./_sections/Menu";
import Testimony from "./_sections/Testimony";
import FrequentlyAskedQuestions from "./_sections/FrequentlyAskedQuestions";
import JoinCommunity from "./_sections/JoinCommunity";

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

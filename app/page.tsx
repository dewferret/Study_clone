import Image from "next/image";
import TopBox1 from "../components/topbox1";
import TopBox2 from "../components/topbox2";
import BotBox1 from "../components/botbox1";
import BotBox2 from "../components/botbox2";

export default function Home() {
  return (
    <main>
      <div className="top-content">
        <div className="container">
          <div className="content">

            <TopBox1 />

            <TopBox2 />

          </div>
        </div>
      </div>

      <div className="banner">
        <img src="/img/64dd37d2-ab92-4603-ae40-87e384bfcc31" alt="Banner" />
      </div>

      <div className="bot-content">
        <div className="container">

          <BotBox1 />

          <BotBox2 />

        </div>
      </div>

    </main>
  );
}
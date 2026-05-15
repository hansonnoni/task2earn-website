import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import screen1 from "../assets/images/screen1.jpg";
import screen2 from "../assets/images/screen2.jpg";
import screen3 from "../assets/images/screen3.jpg";
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      <Navbar />

      {/* HERO SECTION */}
<section className="px-6 py-24 text-center bg-gradient-to-b from-gray-50 to-white">

  <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-5xl mx-auto">
    Make Money Online
    By Completing
    Simple Tasks
  </h1>

  <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
    Task2Earn helps users earn rewards by watching videos,
    following pages, testing apps, referring friends,
    and completing easy online activities.
  </p>

  <div className="mt-10 flex justify-center gap-5 flex-wrap">

    <Link to="/waitlist">
  <button className="bg-black text-white px-8 py-4 rounded-2xl text-lg font-semibold">
    Download App
  </button>
</Link>

    <button className="border border-black px-8 py-4 rounded-2xl text-lg font-semibold">
      Learn More
    </button>

  </div>

  {/* APP PREVIEW */}
<section className="px-6 py-20 bg-gray-50">

  <h2 className="text-4xl font-bold text-center">
    App Preview
  </h2>

  <p className="text-center text-gray-600 mt-4">
    Simple, fast and user-friendly experience.
  </p>

  <div className="grid md:grid-cols-3 gap-8 mt-14">

    <img
      src={screen1}
      alt="App Screenshot 1"
      className="rounded-3xl shadow-lg w-full"
    />

    <img
      src={screen2}
      alt="App Screenshot 2"
      className="rounded-3xl shadow-lg w-full"
    />

    <img
      src={screen3}
      alt="App Screenshot 3"
      className="rounded-3xl shadow-lg w-full"
    />

  </div>

</section>

        {/* FEATURES SECTION */}
<section className="px-6 py-20 bg-gray-50">

  <h2 className="text-4xl font-bold text-center">
    Why Choose Task2Earn?
  </h2>

  <div className="grid md:grid-cols-3 gap-8 mt-14">

    <div className="bg-white p-8 rounded-3xl shadow-sm">
      <h3 className="text-2xl font-semibold">
        Simple Tasks
      </h3>

      <p className="mt-4 text-gray-600">
        Earn by watching videos, following pages,
        downloading apps, and more.
      </p>
    </div>

    <div className="bg-white p-8 rounded-3xl shadow-sm">
      <h3 className="text-2xl font-semibold">
        Fast Withdrawals
      </h3>

      <p className="mt-4 text-gray-600">
        Withdraw your earnings quickly and securely
        to your preferred payment method.
      </p>
    </div>

    <div className="bg-white p-8 rounded-3xl shadow-sm">
      <h3 className="text-2xl font-semibold">
        Referral Rewards
      </h3>

      <p className="mt-4 text-gray-600">
        Invite friends and earn commissions whenever
        they complete tasks.
      </p>
    </div>

  </div>

</section>

{/* HOW IT WORKS */}
<section className="px-6 py-20">

  <h2 className="text-4xl font-bold text-center">
    How It Works
  </h2>

  <div className="grid md:grid-cols-3 gap-10 mt-14 text-center">

    <div>
      <div className="text-5xl font-bold">
        1
      </div>

      <h3 className="mt-4 text-2xl font-semibold">
        Create Account
      </h3>

      <p className="mt-3 text-gray-600">
        Sign up and set up your free Task2Earn account.
      </p>
    </div>

    <div>
      <div className="text-5xl font-bold">
        2
      </div>

      <h3 className="mt-4 text-2xl font-semibold">
        Complete Tasks
      </h3>

      <p className="mt-3 text-gray-600">
        Start completing simple online tasks daily.
      </p>
    </div>

    <div>
      <div className="text-5xl font-bold">
        3
      </div>

      <h3 className="mt-4 text-2xl font-semibold">
        Earn Money
      </h3>

      <p className="mt-3 text-gray-600">
        Withdraw earnings and grow your income.
      </p>
    </div>

  </div>

</section>

{/* REFERRAL SECTION */}
<section className="px-6 py-20 bg-black text-white text-center">

  <h2 className="text-4xl font-bold">
    Earn More With Referrals
  </h2>

  <p className="mt-6 max-w-2xl mx-auto text-gray-300">
    Invite friends to Task2Earn and receive rewards
    whenever they complete tasks and stay active.
  </p>

  <button className="mt-8 bg-white text-black px-8 py-4 rounded-2xl font-semibold">
    Start Referring
  </button>

</section>

{/* DOWNLOAD SECTION */}
<section className="px-6 py-24 text-center">

  <h2 className="text-5xl font-bold">
    Start Earning Today
  </h2>

  <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
    Join thousands of users already earning money
    daily with Task2Earn.
  </p>

  <div className="mt-10 flex justify-center gap-5 flex-wrap">

    <button className="bg-black text-white px-8 py-4 rounded-2xl font-semibold text-lg">
      Download Android App
    </button>

    <button className="border border-black px-8 py-4 rounded-2xl font-semibold text-lg">
      Join Community
    </button>

  </div>

</section>

<footer className="px-6 py-10 border-t">

  <div className="flex flex-col md:flex-row justify-between items-center gap-6">

    <h2 className="text-2xl font-bold">
      Task2Earn
    </h2>

    <div className="flex gap-6">

      <a href="/privacy">
        Privacy
      </a>

      <a href="/terms">
        Terms
      </a>

      <a href="/contact">
        Contact
      </a>

    </div>

  </div>

  <p className="text-center text-gray-500 mt-8">
    © 2026 Task2Earn. All rights reserved.
  </p>

</footer>

      </section>

    </div>
  );
}
import Button from "../components/Button";
import SocialMediaIcons from "../components/SocialMediaIcons";

export default function Home() {

    return (
        <body className="grid grid-rows-2 sm:grid-rows-none sm:grid-cols-2 p-8 sm:p-14 bg-violet bg-mobile sm:bg-desktop bg-no-repeat sm:bg-center sm:bg-cover min-h-screen">
            <section className="flex flex-col place-content-start">
                <div className="flex justify-start h-7 sm:h-10">
                    <img className="h-full" src="/assets/logo.svg" alt="huddle" />
                </div>
                <div className="flex grow items-center justify-center my-6">
                    <img className="w-80 sm:w-11/12 md:w-full" src="/assets/illustration-mockups.svg" alt="mockup" />
                </div>
            </section>
            <main className="flex flex-col items-center sm:items-end">
                <div className="flex flex-col items-center sm:items-start justify-center grow gap-y-6 sm:pl-20">
                    <h1 className="poppins-600 text-center sm:text-left text-[25px] sm:text-[40px] text-white">Build The Community Your Fans Will Love</h1>
                    <p className="open-sans-400 text-center sm:text-left text-[16px] sm:text-[18px] text-white">
                        Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
                    </p>
                    <Button />
                </div>
                <SocialMediaIcons />
            </main>
        </body>
    )
}
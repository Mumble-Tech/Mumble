import { FooterNav } from "../components/nav/FooterNav";
import { HeaderNav } from "../components/nav/HeaderNav";
import { Progress } from "../components/roadmap/progress";
import { Heading, SubHeading } from "../components/text/Text";

export const Roadmap = () => {
    return (
    <div>
        <div>
            <HeaderNav />
        </div>
        <div>
            <Heading className='flex justify-center' innerText="What's next for Mumble?" />
            <SubHeading className='flex justify-center' innerText='Here are the features we are currently working on...' />
        </div>
        <section className='text-left p-8'>
            {/* Progress Bar */}
            <Progress />
        </section>
        <FooterNav />
    </div>
    );
};
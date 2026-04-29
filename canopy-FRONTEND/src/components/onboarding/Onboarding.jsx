import { useState } from "react";
import OB_Footer from "./OB_Footer";
import OB_Header from "./OB_Header";
import OB_Step from "./OB_Step"

//IMAGES
const img1 = "/onboarding_imgs/OB_IMG_1.png"
const img2 = "/onboarding_imgs/OB_IMG_2.png"
const img3 = "/onboarding_imgs/OB_IMG_3.png"
const img4 = "/onboarding_imgs/OB_IMG_4.png"


function Onboarding() {
  const [step, setStep] = useState(0);
  const totalSteps = 4;

//STEPS
  const steps = [
    {
        title:"Track Your Expenses",
        image: img1,
        alt: "iphones displaying Canopy app",
        message: "See where your money goes"
    },
    {
        title:"Set Your Budget",
        image: img2,
        alt: "iphones displaying Canopy app",
        message: "Set a daily or monthly budget. Stay on Track"
    },
    {
        title:"Reach Your Goal",
        image: img3,
        alt: "iphone and tablet displaying Canopy app",
        message: "Set small goals and build better spending habits over time."
    },
    {
        title:"Grow Your Tree",
        image: img4,
        alt: "tree sapling",
        message: "Complete weekly quests to help the tree grow and reveal a special tree!"
    }
  ]


  //progress through steps:
  const next = () => {
    if (step < totalSteps - 1) {
      setStep((prev) => prev + 1);
    } else {
      console.log("Onboarding complete");
    }
  };

  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <OB_Header />
      {/* spread operator */}
      <OB_Step {...steps[step]}/>
      <OB_Footer step={step} totalSteps={totalSteps} onNext={next} />
    </div>
  );
}

export default Onboarding;

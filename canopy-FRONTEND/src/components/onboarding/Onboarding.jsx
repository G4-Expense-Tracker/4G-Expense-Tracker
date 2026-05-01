import { useState } from "react";
import OB_Footer from "./OB_Footer";
import OB_Header from "./OB_Header";
import OB_Step from "./OB_Step"
import OB_End from "./OB_End";

//IMAGES
const img1 = "/onboarding_imgs/OB_IMG_1.png"
const img2 = "/onboarding_imgs/OB_IMG_2.png"
const img3 = "/onboarding_imgs/OB_IMG_3.png"
const img4 = "/onboarding_imgs/OB_IMG_4.png"


function Onboarding() {
  const [step, setStep] = useState(0);
  const totalSteps = 4;
  const [skipped, setSkipped] = useState(false)

  //STEPS
  const steps = [
    {
      title: "Track Your Expenses",
      image: img1,
      alt: "iphones displaying Canopy app",
      message: "See where your money goes"
    },
    {
      title: "Set Your Budget",
      image: img2,
      alt: "iphones displaying Canopy app",
      message: "Set a daily or monthly budget. Stay on Track"
    },
    {
      title: "Reach Your Goal",
      image: img3,
      alt: "iphone and tablet displaying Canopy app",
      message: "Set small goals and build better spending habits over time."
    },
    {
      title: "Grow Your Tree",
      image: img4,
      alt: "tree sapling",
      message: "Complete weekly quests to help the tree grow and reveal a special tree!"
    }
  ]


  //progress through steps:
  const next = () => {
    if (step < totalSteps - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const handleSkip = () => {
    setSkipped(true)
  }

  const backHandler = () => {
    setStep((prev) => prev - 1)
  }

  if (skipped) {
    return (
      <OB_End />
    )


  } else {

    return (
      <div style={{ height: "100vh", position: "relative" }}>
        <OB_Header onSkip={handleSkip} onBack={backHandler} />
        {/* spread operator */}
        <OB_Step {...steps[step]} />
        <OB_Footer step={step} totalSteps={totalSteps} onNext={next} />
      </div>
    )
  }
}

export default Onboarding;

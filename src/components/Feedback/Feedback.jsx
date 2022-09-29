import React from 'react'
import { useState } from "react";
import Section from "components/Section/Section";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Notification from "components/Notification/Notification";

export default function Feedback() {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const feedbackOptions = { good, neutral, bad };

    const onLeaveFeedback = (type) => {
        switch (type) {
            case "good":
                setGood(prevGood => prevGood + 1);
                break;
            case "neutral":
                setNeutral(prevNeutral => prevNeutral + 1);
                break;
            case "bad":
                setBad(prevBad => prevBad + 1);
                break;
            default:
                break;
        }
        
    }

    const countTotalFeedback = () => {
        const total = good + neutral + bad;
        return total;
    }

    const  countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
        console.log(total);
        if (!total) {
            return 0;
        }
        const result = ((good + neutral) / total) * 100;
        return Number(result.toFixed(2));
    }
    const total = countTotalFeedback();
    const count = countPositiveFeedbackPercentage();

    return (
       
        <div>
           <Section title="Please leave feedback">
               <FeedbackOptions options={Object.keys(feedbackOptions)}  onLeaveFeedback={onLeaveFeedback}/>
           </Section>
           <div>
                <Section title="Statistics" >
                    {!total ? <Notification message="There is no feedback"></Notification> :
                    <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={count} />}
               </Section>
           </div>
           </div>
    
  )
}

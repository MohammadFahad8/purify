import React from 'react'
import GaugeChart from 'react-gauge-chart'
export const Exam = () => {
    const [qNumber, setQNumber] = React.useState(0)
    const [points, setPoints] = React.useState(100)
    const[answer,setAnswer] = React.useState('')
    const[showResult,setshowResult] = React.useState(false)
    const[percentage,setPercent] = React.useState(0)
    const [questions, setQuestions] = React.useState([
{ question: "Held hands romantically?" },
{ question: "Been on a date?" },
{ question: "Been in a relationship?" },
{ question: "Danced with someone suggestively?" },
{ question: "Kissed a non-family member?" },
{ question: "Kissed a non-family member on the lips?" },
{ question: "Held hands romantically?" },
{ question: "Been on a date?" },
{ question: "Been in a relationship?" },
{ question: "Danced with someone suggestively?" },
{ question: "Kissed a non-family member?" },
{ question: "Kissed a non-family member on the lips?" },
{ question: "Held hands romantically?" },
{ question: "Been on a date?" },
{ question: "Been in a relationship?" },
{ question: "Danced with someone suggestively?" },
{ question: "Kissed a non-family member?" },
{ question: "Kissed a non-family member on the lips?" },
{ question: "Held hands romantically?" },
{ question: "Been on a date?" },
{ question: "Been in a relationship?" },
{ question: "Danced with someone suggestively?" },
{ question: "Kissed a non-family member?" },
{ question: "Kissed a non-family member on the lips?" },
{ question: "Held hands romantically?" },
{ question: "Been on a date?" },
{ question: "Been in a relationship?" },
{ question: "Danced with someone suggestively?" },
{ question: "Kissed a non-family member?" },
{ question: "Kissed a non-family member on the lips?" },
{ question: "Held hands romantically?" },
{ question: "Been on a date?" },
{ question: "Been in a relationship?" },
{ question: "Danced with someone suggestively?" },
{ question: "Kissed a non-family member?" },
{ question: "Kissed a non-family member on the lips?" },
{ question: "Held hands romantically?" },
{ question: "Been on a date?" },
{ question: "Been in a relationship?" },
{ question: "Danced with someone suggestively?" },
{ question: "Kissed a non-family member?" },
{ question: "Kissed a non-family member on the lips?" },
{ question: "Held hands romantically?" },
{ question: "Been on a date?" },
{ question: "Been in a relationship?" },
{ question: "Danced with someone suggestively?" },
{ question: "Kissed a non-family member?" },
{ question: "Kissed a non-family member on the lips?" },
{ question: "Held hands romantically?" },
{ question: "Been on a date?" },
{ question: "Been in a relationship?" },
{ question: "Danced with someone suggestively?" },
{ question: "Kissed a non-family member?" },
{ question: "Kissed a non-family member on the lips?" },
{ question: "Held hands romantically?" },
{ question: "Been on a date?" },
{ question: "Been in a relationship?" },
{ question: "Danced with someone suggestively?" },
{ question: "Kissed a non-family member?" },
{ question: "Kissed a non-family member on the lips?" },
{ question: "Held hands romantically?" },
{ question: "Been on a date?" },
{ question: "Been in a relationship?" },
{ question: "Danced with someone suggestively?" },
{ question: "Kissed a non-family member?" },
{ question: "Kissed a non-family member on the lips?" },
{ question: "Held hands romantically?" },
{ question: "Been on a date?" },
{ question: "Been in a relationship?" },
{ question: "Danced with someone suggestively?" },
{ question: "Kissed a non-family member?" },
{ question: "Kissed a non-family member on the lips?" },
{ question: "Held hands romantically?" },
{ question: "Been on a date?" },
{ question: "Been in a relationship?" },
{ question: "Danced with someone suggestively?" },
{ question: "Kissed a non-family member?" },
{ question: "Kissed a non-family member on the lips?" },
{ question: "Held hands romantically?" },
{ question: "Been on a date?" },
{ question: "Been in a relationship?" },
{ question: "Danced with someone suggestively?" },
{ question: "Kissed a non-family member?" },
{ question: "Kissed a non-family member on the lips?" },
{ question: "Held hands romantically?" },
{ question: "Been on a date?" },
{ question: "Been in a relationship?" },
{ question: "Danced with someone suggestively?" },
{ question: "Kissed a non-family member?" },
{ question: "Kissed a non-family member on the lips?" },
{ question: "Held hands romantically?" },
{ question: "Been on a date?" },
{ question: "Been in a relationship?" },
{ question: "Danced with someone suggestively?" },
{ question: "Kissed a non-family member?" },
{ question: "Kissed a non-family member on the lips?" },
{ question: "Held hands romantically?" },
{ question: "Been on a date?" },
{ question: "Been in a relationship?" },

{ question: "Is it evnening?" },
    ])
    
    const calculatePoints = ()=>
    {

        if(points>=0 && points<=8){
            setAnswer('You are as corrupt as they come. You have engaged in pretty wild acts, including paying for – or being paid for – intimacy.')
            
                    }else if(points>=9 && points<=44){
setAnswer('Your purity is very tainted. You have probably consumed hardcore drugs, been to jail, and/or been intimate in public.')

        }else if(points>=45 && points<=76){
setAnswer('Your purity is tainted. You have had numerous naughty experiences, used drugs, and/or had troubles with the law.')


        }else if(points>=77 && points<=93){
setAnswer('You are averagely pure. You have probably loved someone.')

        }else if(points>=94 && points<=97){
setAnswer('	You are quite pure. Perhaps you have kissed or held hands with someone.')

        }else if(points>=98 && points<=100){
setAnswer('You are as pure as gold. Very few people fall into this band.')

        }
    }
    const chechForInc = ()=>{
        
        if(questions.indexOf(questions[questions.length-1]) != qNumber){
            setQNumber(qNumber+1)
            setPoints(points-1)
        }else{
            
            setPoints(points-1)
            setshowResult(true)
            calculatePoints()
        }
    }
    const chechForIncReject = ()=>{
        
        if(questions.indexOf(questions[questions.length-1]) != qNumber){
            setQNumber(qNumber+1)
            
        }else{
            
            
            setshowResult(true)
            calculatePoints()
        }
    }
    return (
        <>

{(!showResult)?
            <div className='row mt-5 justify-content-center'>
                <div className='col-md-12'>
                    <p >{'Q#.'+parseInt(qNumber+1)+" "}{questions[qNumber].question}</p>
                    <button type="button" className='btn btn-success' onClick={chechForInc}>Yes</button>
                    <button type="button" className='btn btn-danger' onClick={ chechForIncReject }>No</button>
                </div> </div>
                :''}
        <div className='row justify-content-center mt-5'>
            <div className="col-md-4">
                {(answer!='')?
                <GaugeChart id="gauge-chart5"
                nrOfLevels={420}
                arcsLength={[0.3, 0.5, 0.2]}
                colors={['#EA4228', '#F5CD19', '#5BE12C']}
                percent={points/100}
                arcPadding={0.02}
              />:''}
                <p>{answer}</p>
                </div>
                </div>
                
        </>
    )
}
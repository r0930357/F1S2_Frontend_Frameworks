import IComputerScientist from '../models/ComputerScientist.tsx'

const computerScientists: IComputerScientist[] = [
    {
        firstName: 'Charles',
        lastName: 'Babbage',
        birth: 1791,
        death: 1871,
        accomplishments: 'Originated the concept of a programmable general-purpose computer. Designed the Analytical Engine and built a prototype for a less powerful mechanical calculator. ',
    },
    {
        firstName: 'Ada',
        lastName: 'Lovelace',
        birth: 1814,
        death: 1852,
        accomplishments: "An English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognize that the machine had applications beyond pure calculation, and created the first algorithm intended to be carried out by such a machine. As a result, she is often regarded as the first to recognize the full potential of a \"computing machine\" and the first computer programmer.",
    },
    {
        firstName: 'Alan',
        lastName: 'Turing',
        birth: 1912,
        death: 1954,
        accomplishments: 'Made several fundamental contributions to theoretical computer science, including the Turing machine computational model, the conceiving of the stored program concept and the designing of the high-speed ACE design. Independently of Alonzo Church, he formulated the Church-Turing thesis and proved that first-order logic is undecidable. He also explored the philosophical issues concerning artificial intelligence, proposing what is now known as Turing test.',
    },
]

export default computerScientists
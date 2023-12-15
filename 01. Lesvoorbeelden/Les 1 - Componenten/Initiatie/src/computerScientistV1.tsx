import {FunctionComponent} from 'react'

const ComputerScientistV1: FunctionComponent = () => {
    return (
        <div>
            <h1>Famous computer scientists</h1>
            <ul>
                <li>
                    Charles Babbage (1791 - 1871):
                    <p>Originated the concept of a programmable general-purpose computer. Designed the Analytical Engine
                        and built a prototype for a less powerful mechanical calculator.</p>
                </li>
                <li>
                    Ada Lovelace (1815 - 1852):
                    <p>An English mathematician and writer, chiefly known for her work on Charles
                        Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first
                        to recognize that the machine had applications beyond pure calculation, and created the first
                        algorithm intended to be carried out by such a machine. As a result, she is often regarded as
                        the first to recognize the full potential of a "computing machine" and the first computer
                        programmer.</p>
                </li>
                <li>
                    Alan Turing (1912 - 1954):
                    <p>Made several fundamental contributions to theoretical computer science,
                        including the Turing machine computational model, the conceiving of the stored program concept
                        and the designing of the high-speed ACE design. Independently of Alonzo Church, he formulated
                        the Church-Turing thesis and proved that first-order logic is undecidable. He also explored the
                        philosophical issues concerning artificial intelligence, proposing what is now known as Turing
                        test.</p>
                </li>
            </ul>
        </div>
    )
}

export default ComputerScientistV1;
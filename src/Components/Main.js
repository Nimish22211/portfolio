import React, { useEffect } from 'react'
import './Main.css'
function Main() {
    useEffect(() => {
        const words = ['I am a web developer.', 'I am Interested in AI.', 'Interested in Blockchain.'];
        let display = document.getElementById('typing');
        let currentWord = [];
        let i = 0;
        let j = 0;
        let isDeleting = false;
        let isEnd = false;
        function typing() {
            isEnd = false
            display.innerHTML = currentWord.join('');
            if (i < words.length) {
                if (!isDeleting && j < words[i].length) {
                    currentWord.push(words[i][j]);
                    j++
                    display.innerHTML = currentWord.join('');

                }
                if (isDeleting && j <= words[i].length) {
                    currentWord.pop(words[i][j]);
                    j--
                    display.innerHTML = currentWord.join('');

                }
                if (j === words[i].length) {
                    isDeleting = true;
                    isEnd = true;
                }
                if (isDeleting && j === 0) {
                    isDeleting = false;
                    i++;
                    if (i === words.length) {
                        i = 0;
                    }
                }
            }
            let time = isEnd ? 2000 : isDeleting ? 50 : 250;
            setTimeout(typing, time);
        }
        typing()
    }, [])

    return (
        <div className='about' id="about">
            <div>
                <h1>Hi I am Nimish</h1>
                <h2 id="typing"></h2>
            </div>
            <img src="/twitter profile-modified.png" />
        </div>
    )
}

export default Main

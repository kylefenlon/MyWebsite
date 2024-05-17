import AdimoScrape from '../images/adimo-scrape.png'
import InitialScrape from '../images/initial-scrape-code.png'
import WhiskeyScrape from '../images/whiskey-code.png'


const BlandApp = () => {
    return (
        <>
            <div class="blands-project-container">
                <div class="blands-project-card">
                    <h2 class="blands-project-title">Web Scraping Task</h2>
                    <img src={AdimoScrape} alt="img" />
                    <div class='scraper-details'>
                        <p>For a take home task during an interview I was tasked with scraping a website that the company had built. </p>
                        <p>The goal was to scrape the website for certain details about the products shown and then convert that data into JSON format in another file.</p>
                        <p>The code below is the solution I came up with.</p>
                    </div>
                    <img src={InitialScrape} alt="img" />
                    <div class='scraper-details'>
                        <p>After completing this task I was then asked to scrape another website that was not built by the same company. However this website had firewall protection. </p>
                        <p> Trying to scrape this websitedid not seem to be possible as the website is behind CloudeFlare security so I decided to copy the fetch request from the network tab in Chrome so that the headers are also
                            included to try and get around CloudeFlare's security but still did not work.
                        </p>
                        <p>I was still getting the 403 error so I decided to copy the HTML page source code into a file
                            and then used the scraper on that file and managed to get the details asked for by the task.
                        </p>
                    </div>
                    <img src={WhiskeyScrape} alt="img" />
                </div>
            </div>
        </>
    )
}

export default BlandApp;
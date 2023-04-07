import "./Blands.css"
import BlandsLanding from '../images/BlandsSunglasses.png'
import BlandsCheckout from '../images/BlandsCheckout.png'
import BlandsStripe from '../images/BlandsStripe.png'
import BlandsStripeItems from '../images/StripeItems.png'

const BlandApp = () => {
    return (
        <>
            <div class="blands-project-container">
                <div class="blands-project-card">
                    <h2 class="blands-project-title">Bland's Sunglasses</h2>
                    <img src={BlandsLanding} alt="img" />
                    <img src={BlandsCheckout} alt="img" />
                    <img src={BlandsStripe} alt="img" />
                    <img src={BlandsStripeItems} alt="img" />
                    <div class="blands-project-details">
                        <p>Bland's Sunglasses is an ecommerce store built for selling sunglasses.</p>
                        <p>It allows users to buy sunglasses by adding them to their cart and then check out using Stripe.</p>
                        <p>This app was built using using Bootstrap, JavaScript, React, Express and Stripe.</p>
                        <p>In order to get this project live I created an EC2 instance running Ubuntu & configured it to be publicly accessible.
                            <p>I then installed and configured nginx.</p>
                            <p>I Used Certbot/Let’s Encrypt to install a TLS certificate to secure the website (and display https in the URL).</p>
                            <p> Set up a subdomain and pointed it to the EC2 instance.</p>
                            <p>Created a bash script to deploy your code at the click of a button using Linux commands such as ‘scp’, ‘rsync’ and ‘ssh’.</p>
                            <p>Set up another sub-domain for the server api.</p>
                            <p>Used Nginx as a reverse proxy for the Express application so that I could set up a TLS certificate and forward web traffic to the app running on a different port.</p>
                        </p>
                        <div class="blands-buttons">
                            <a href="https://github.com/kylefenlon/StripeEcommerceStore" class="blands-btn">Github Repo</a>
                            <a href="https://shop.kfenlon.com" class="blands-btn-light" target="_blank">DEMO</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlandApp;
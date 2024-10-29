import { ContactForm } from "../components/main/Form";

export default function Contact(){
    return (
        <div className="w-screen min-h-[calc(100vh-60px)] bg-background">
            <div className="w-full container h-full flex flex-col items-center pt-10 gap-6">
            <h1 className="font-montserrat font-bold text-dark text-4xl uppercase max-w-md text-center ">
            DEMANDEZ UNE ESTIMATION GRATUITE
          </h1>
          <p className="font-roboto font-light text-dark/70 max-w-5xl  px-6">
          Vous avez un projet de câblage réseau ? Faites-nous en part en remplissant le formulaire ci-dessous, ou contactez-nous directement par courriel à info@kstechnologie.com. Notre équipe se fera un plaisir de répondre à toutes vos questions et de vous guider dans le choix des meilleures solutions pour vos besoins en câblage. Nous nous engageons à vous répondre dans les plus brefs délais pour vous accompagner dans la réussite de votre projet.
          </p>
          <div className="w-full flex  gap-8">
            <div className="h-full w-1/3 bg-light rounded-[10px]">
            <div className="w-[80%] mx-auto">
                <div>
            <h2>Contactez-nous</h2>

                </div>
                <div>
                    <h3>visitez-nous</h3>
                    <h5>viens dire bonjour à notre bureau</h5>
                    <p>7190 Rue Jarry H1J 1G5 Anjou Québec</p>
                </div>
                <div>
                    <h3>discutez avec nous</h3>
                    <p>notre équipe amicale est là pour vous aider</p>
                    <p>info@kstechnologie.com</p>
                </div>
                <div>
                    <h3>appelle-nous</h3>
                    <p>lun-ven de 8 h à 17 h</p>
                    <p>+1 (438) 464-2161</p>
                </div>
                <div>
                    <h3>médias sociaux</h3>
                </div>
            </div>
            </div>
            <div className="h-full w-2/3 ">
            <ContactForm/>
            </div>

          </div>

            </div>

        </div>
    )
}
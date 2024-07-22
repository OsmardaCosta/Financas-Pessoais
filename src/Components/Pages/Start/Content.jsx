import imghome from '../Home/assets/imghome.png'

const Content = () => {
    return(
        <main>
            <h1 className="text-2xl font-bold text-center mt-4 md:w-[320px] m-auto block md:text-3xl">Gerenciamento financeiro eficaz e de forma mais segura</h1>

            <section>
                <img  className="m-auto mt-10 w-[400px] md:w-[600px] lg:w-[700px] bg-white rounded-md shadow-xl" src={imghome} alt="" />
            </section>
        </main>
    )
}

export default Content
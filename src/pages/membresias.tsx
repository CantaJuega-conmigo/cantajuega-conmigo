import styles from '../styles/Membresias.module.css'
import firstbackground from '../../public/img/Untitled_Artwork 3.png' 
import secondbackground from '../../public/img/Untitled_Artwork 5.png' 
import Image from 'next/image'
export default function Membresias(){
    return(
        <div className={styles.PrincipalContainer}>
            <section className={styles.FirstSection}>
                <h1>MEMBRESÍAS</h1>
            </section>

            <section className={styles.SecondSection}>
              <span>Aquí es donde se explican que cada membresía se adapta a la edad y evolucion del infante o niño.
Mauris aliquam lacus augue, quis blandit ligula mollis et. 
Etiam id nulla a turpis sagittis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </section>

            <section className={styles.ThirdSection}>
               
              <article className={styles.ThirdSectionTitle}>
               <h1 className={styles.TitleM}>Membresías Canta Juega Conmigo</h1>
               </article>

               <main className={styles.Container2}>
                  <div className={styles.MembershipsContainers} >
                     <header>
                        <h1>MENSUAL</h1>
                     <div className={styles.ImageContainer}>
                     <Image className={styles.Image1} src={firstbackground} alt="" />
                     </div>
                     </header>

                     <article>
                        <span>Todas las herramientas terapeuticaspara niñ@s de 0 meses a 6 años</span>
                        <span> Material de apoyo audiovisual y de lectura conductiva</span>
                        <span>Todas las canciones de CantaConmigo</span>
                     <button className={styles.SelectButton}>SELECCIONA &gt;</button>
                     </article>

                  </div>

                  <div className={styles.MembershipsContainers} id='Semestral'>
                     <header>
                        <h1>SEMESTRAL</h1>
                        <div className={styles.ImageContainer}>
                     <Image className={styles.Image2} src={secondbackground} alt="" />
                     </div>
                     </header>
                     <article>
                        <span>Todas las herramientas terapeuticaspara niñ@s de 0 meses a 6 años</span>
                        <span> Material de apoyo audiovisual y de lectura conductiva</span>
                        <span>Todas las canciones de CantaConmigo</span>
                     <button className={styles.SelectButton}>SELECCIONA &gt;</button>
                     </article>
                  </div>
                  
                  <div className={styles.MembershipsContainers} id='Anual'>
                     <header>
                        <h1>ANUAL</h1>
                        <div className={styles.ImageContainer}>
                     <Image className={styles.Image3} src={firstbackground} alt="" />
                     </div>
                     </header>
                     <article>
                        <span>Todas las herramientas terapeuticaspara niñ@s de 0 meses a 6 años</span>
                        <span> Material de apoyo audiovisual y de lectura conductiva</span>
                        <span>Todas las canciones de CantaConmigo</span>
                     <button className={styles.SelectButton}>SELECCIONA &gt;</button>
                     </article>
                  </div>

               </main>
            </section>

            <section className={styles.FourthSection}>
               <span>
                  Diviertete aprendiendo con los
                  videos y canciones que Canta Juega
                  ha desarrollado para tus hij@!
               </span>

            </section>
            <section className={styles.FiveSection}>
                <h1 className={styles.TitleM}>Membresía Canta Conmigo</h1>
                <div className={styles.MembershipsContainers} id='Anual' style={{ background: " #f00d0d "}}>
                     <header>
                        <h1>ANUAL</h1>
                        <div className={styles.ImageContainer}>
                     <Image className={styles.Image3} src={firstbackground} alt="" />
                     </div>
                     </header>
                     <article>
                        <span>Todas las herramientas terapeuticaspara niñ@s de 0 meses a 6 años</span>
                        <span> Material de apoyo audiovisual y de lectura conductiva</span>
                        <span>Todas las canciones de CantaConmigo</span>
                     <button className={styles.SelectButton}>SELECCIONA &gt;</button>
                     </article>
                  </div>

            </section>
          
        </div>
    )
}
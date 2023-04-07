import styles from '../styles/Membresias.module.css'
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
              <article className={styles.ThirdSectionTitle}><h1>Membresías Canta Juega Conmigo</h1></article>
               <main className={styles.Container2}>
                  <div className={styles.MembershipsContainers} >
                     <header>
                        <h1>Mensual</h1>
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
                        <h1>Semestral</h1>
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
                        <h1>Anual</h1>
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
          
        </div>
    )
}
import React from 'react'
import styles from '../../styles/ImageSection.module.css'

interface ImageSectionProps {
  images: string;
  // content:boolean
}


const ImageSection = (props:ImageSectionProps) => {
  return (
    <div>
      <div className={styles.Container}>
          <div className={styles.SectionsContainer}>
            <section className={styles.Content}>
              <article>
              <h1>ACERCA DE NOSOTROS</h1>
              </article>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
                erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci 
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo 
                consequat. 
              </p>
            </section>
            <section  className={styles.Content}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi doloribus amet atque esse laboriosam a ipsam optio dolore porro quod officia rem, sunt nulla quia. Accusantium et saepe ex!</section>
          
            <section className={styles.Content}>
              <article className={styles.Pasos}>
                <span>PASO 1</span>
                <span>PASO 2</span>
                <span>PASO 3</span>
                <span>PASO 4</span>
              </article>
            </section>
          
          </div>
      </div>
    </div>
    
  )
}

export default ImageSection
import './projects.css'

export const Projects = () => {
  return (
    <div className='projects' id='projects'>
        <div className='projects__title'>Projects</div>
        <div className='projects__container'>
            <div className='projects__container__project'>
            <div className='projects__container__project__image'>
                <img src='/project.png' alt='Project1' />
                <div className='projects__container__project__text__title'>Project 1</div>
            </div>
            <div className='projects__container__project__text'>
                
                <div className='projects__container__project__text__description'>Lorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, volupt iLorem ipsum dolor siLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, volupt iLorem ipsum dolor siLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptiLorem ipsum dolor siLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.</div>
                <div className='projects__container__project__text__buttons'>
                <button className='projects__container__project__text__buttons__demo'>Demo</button>
                <button className='projects__container__project__text__buttons__code'>Code</button>
                </div>
            </div>
            </div>
            <div className='projects__container__project'>
            <div className='projects__container__project__image'>
                <img src='public/project.png' alt='Project2' />
            </div>
            <div className='projects__container__project__text'>
                <div className='projects__container__project__text__title'>Project 2</div>
                <div className='projects__container__project__text__description'>Lorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.</div>
                <div className='projects__container__project__text__buttons'>
                <button className='projects__container__project__text__buttons__demo'>Demo</button>
                <button className='projects__container__project__text__buttons__code'>Code</button>
                </div>
            </div>
            </div>
            <div className='projects__container__project'>
            <div className='projects__container__project__image'>
                <img src='public/project.png' alt='Project3' />
            </div>
            <div className='projects__container__project__text'>
                <div className='projects__container__project__text__title'>Project 3</div>
                <div className='projects__container__project__text__description'>Lorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.</div>
                <div className='projects__container__project__text__buttons'>
                <button className='projects__container__project__text__buttons__demo'>Demo</button>
                <button className='projects__container__project__text__buttons__code'>Code</button>
                </div>
                </div>
                </div>
            </div>
    </div>
  )
}

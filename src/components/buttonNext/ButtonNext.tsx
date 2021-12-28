import './style.scss'

interface interfaceButtonNext {
  nextSection?: string;
  returnSection?: string;
}

export function ButtonNext({ nextSection, returnSection }: interfaceButtonNext) {

  return (

    <a href={ nextSection ?? returnSection } className={`arrow-icon ${returnSection ? 'return': ''}`}>
      <img alt="img" src="https://firebasestorage.googleapis.com/v0/b/portfolio-8a10e.appspot.com/o/7821ghr.svg?alt=media&token=7aaa72ab-35c4-4749-8bb2-e4cf8aa8ee6a" />
    </a>

  )

}

// 리액트는 '사용자 정의 태그를 만드는 기술'이다.
// 사용자 정의 태그 === 컴포넌트 === js 객체
// 프론트 App을 컴포넌트의 조립형태로 구조화하는 것

function Header(props) {
    return (
        <header>
            <h1>
                <a href='/'>{props.title}</a>
            </h1>
        </header>
    )

}

function Nav() {
    return (
        <nav>
            <ol>
                <li><a href='/read/1'>html</a></li>
                <li><a href='/read/2'>css</a></li>
                <li><a href='/read/3'>js</a></li>
            </ol>
        </nav>
    )
}

function Article(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            {props.body}
        </article>
    )
}


 export default function SubApp() {
    return (
        <div>
            <Header title='REACT' />
            <Nav />
            <Article title='WELCOME' body='Hello, WEB!' />
            <Article title='TO THE SHOW' body='Hello, REACT!' />
        </div>
    )
 }
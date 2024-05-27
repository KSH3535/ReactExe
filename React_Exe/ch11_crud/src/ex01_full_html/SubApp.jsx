
// 리액트는 '사용자 정의 태그를 만드는 기술'이다.
// 사용자 정의 태그 === 컴포넌트 === js 객체
// 프론트 App을 컴포넌트의 조립형태로 구조화하는 것

 export default function SubApp() {
    return (
        <div>
            {/* ------------------------------- */}
            <header>
                <h1><a href='/'>WEB</a></h1>
            </header>
  
            {/* ------------------------------- */}
            <nav>
                <ol>
                    <li><a href='/read/1'>html</a></li>
                    <li><a href='/read/2'>css</a></li>
                    <li><a href='/read/3'>js</a></li>
                </ol>
            </nav>

            {/* ------------------------------- */}
            <article>
                <h2>Welcome</h2>
                Hello, WEB
            </article>
        </div>
    )
 }
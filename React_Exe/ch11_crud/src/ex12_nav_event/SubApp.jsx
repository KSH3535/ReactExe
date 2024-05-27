function Header(props) {
    return (
        <header>
            <h1>
                <a href='/' onClick={(event) => {
                    event.preventDefault();      // 원래 <a>태그의 기능을 막는다.   
                    props.onChangeMode();
                }}>{props.title}</a>
            </h1>
        </header>
    )

}

function Nav(props) {
    const lis = [];

    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        lis.push(<li key={t.id}>
                <a user_id={t.id} user_name={t.title} href={"/read/" + t.id}
                    onClick={event => {
                        // <a> 태그의 기본 동작 막기
                        event.preventDefault();
                        // props 내의 onChangeMode에 전달된 함수 호출                  
                        props.onChangeMode(event.target.user_id, event.target.user_name);       
                    }}>
                    {t.title}
                </a></li>);
    }

    return (
        <nav>
            <ol>
                {lis}
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

    const topics = [
        {id:1, title:'html', body:'html is ...'},
        {id:2, title:'css', body:'css is ...'},
        {id:3, title:'javascript', body:'javascript is ...'}
    ]
    
    
    return (
        // onChangeMode는 원래 html 요소의 이벤트가 아니라 '사용자 정의 이벤트'이다.

        <div>
            <Header title='REACT' onChangeMode={() => {
                alert('Header');
            }} />

            {/* Nav 내의 list들중에 누가 이벤트를 전달했는지를 구분하기 위해
                id를 매개변수로 받는다. */}
            <Nav topics={topics} onChangeMode={(id, name) => {
                alert(`${id}.${name}`);
            }} />
            <Article title='WELCOME' body='Hello, WEB!' />
        </div>
    )
 }
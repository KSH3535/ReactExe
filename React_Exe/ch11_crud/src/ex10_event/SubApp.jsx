function Header(props) {
    return (
        <header>
            <h1>
                <a href='/' onClick={function(event) {
                    event.preventDefault();      // 원래 <a>태그의 기능을 막는다.   
                    props.onChangeMode();
                }}>{props.title}</a>
            </h1>
        </header>
    )

}

function Nav(props) {

    // props로부터 받은 데이터를 <li></li>로 만들어서 lis에 저장
    const lis = [];

    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        lis.push(<li key={t.id}><a href={"/read/" + t.id}>{t.title}</a></li>);
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
        <div>
            {/* Header의 props로 title과 onChangeMode가 변수로 전달된다. */}
            <Header title='REACT' onChangeMode={function() {
                alert('Header');
            }} />
            <Nav topics={topics} />
            <Article title='WELCOME' body='Hello, WEB!' />
        </div>
    )
 }
/** Containment(포함)
 * 해당 컴포넌트의 children 속성을 이용해서
   여러 가지 다양한 구성을 포함시킬 수 있다.
 * */ 
export default function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder -' + props.color}>
            {props.children}
        </div>
    )
}
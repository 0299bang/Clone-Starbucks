# Starbucks
[demo link](https://friendly-paletas-d470d8.netlify.app)
***

### Youtube iframe API
```html
<div class="container">
  <div class="item"></div>
</div>
```
```css
.container {
  width: 500px;
  background-color: royalblue;
}
.container .item {
  width: 100%;
  height: 0;
  padding-top: 50%
}
```
- padding이라는 것은 요소의 크기가 늘어날 수 있는 구조를 기본적으로 가진다.   
- 내부 위쪽 여백을 % 로 지정하게 되면, % 는 상대적 단위이기 때문에, 위에 예시에서는 아이템의 부모요소의 가로너비에 500px 해당하는 50 % 너비를 가진다.   
- 여기서 부모요소의 가로너비를 변경해도 가로너비2, 세로너비1 비율로 지정된다.   

- Youtube, Vimeo 등의 영상을 삽입할때 유용하게 사용할 수 있다.
>- 기본적으로 16:9 비율의 영상이 제공되기 때문에 padding-top에 56.25%를 입력하면 컨테이너의 가로너비에 상관없이 16:9 비율로 출력된다.
>- 100%:56.25% = 16:9

### 3D 애니메이션
> 구조 확인하기
```html
<div class="container">
  <div class="item front">앞</div>
  <div class="item back">뒤</div>
</div>
```
```css
body {
  padding: 50px;
}
.container {
  width: 100px;
  height: 100px;
  background-color: orange;
  perspective: 300px;
}
.container .item {
  width: 100px;
  height: 100px;
  border: 4px solid red;
  box-sizing: border-box;
  font-size: 60px;
  backface-visibility: hidden;
  transition: 1s;
}
.container .item.front {
  position: absolute;
  transform: rotateY(0deg);
}
.container:hover .item.front {
  transform: rotateY(180deg);
}
.container .item.back {
  transform:rotateY(-180deg);
}
.container:hover .item.back {
  transform: rotateY(0deg);
}
```
### 푸터, 특수기호
```html
&copy;
<
>
&lt;div&gt;
```
> html entities
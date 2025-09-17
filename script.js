//complete this code
class Rectangle {
	constructor(width,height){
		this._width=width;
		this._height=height;
	}
	get width(){
		return this._width;
	}
	get height(){
		return this._height;
	}
	get Area(){
		return this._height*this._width;
	}
	get Perimeter(){
		return 2*(this._height+this._width);
	}

	getArea() { return this.Area; }
   getPerimeter() { return this.Perimeter; }
}

class Square extends Rectangle {
	constructor(side){
		super(side,side);
	}
	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

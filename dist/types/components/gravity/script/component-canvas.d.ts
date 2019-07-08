import TypeComponent from './types';
interface IComponentCanvas {
    context: CanvasRenderingContext2D;
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
    Type?: TypeComponent;
}
declare class ComponentCanvas {
    private Type;
    private context;
    private color;
    private text;
    private x;
    private y;
    private width;
    private height;
    private speedX;
    private speedY;
    private gravity;
    private gravitySpeed;
    constructor({ context, width, height, color, x, y, Type }: IComponentCanvas);
    update(color?: String): void;
    updatePositionX(x: number): void;
    updateGravity(value: number): void;
    hitBottom(): void;
    newPos(): void;
    crashWith(objectOther: any): boolean;
}
export default ComponentCanvas;

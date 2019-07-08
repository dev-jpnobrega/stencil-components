import '../../stencil.core';
import ComponentCanvas from './script/component-canvas.js';
export declare class GravityGameComponent {
    description: string;
    title: string;
    score: string;
    isStartGame: boolean;
    piece: ComponentCanvas;
    htmlScore: HTMLDivElement;
    componentDidLoad(): void;
    updateAreaHandler(event: CustomEvent): void;
    createAreaHandler(event: CustomEvent): void;
    updateScore(score: any): void;
    createPiece(context: any): void;
    onMouseDown(): void;
    onMouseUp(): void;
    renderGravityArea(): JSX.Element;
    render(): JSX.Element;
}

import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
import ComponentCanvas from './script/component-canvas';
export declare class GravityGameComponent {
    width: number;
    height: number;
    piece: any;
    el: HTMLElement;
    updateArea: EventEmitter;
    createArea: EventEmitter;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    frameNo: number;
    interval: number;
    obstacles: Array<ComponentCanvas>;
    updateAreaHandler(event: CustomEvent): void;
    componentDidLoad(): void;
    componentWillLoad(): void;
    onStartGame(): void;
    createInitalCanvasElements(): void;
    checkCrashWith(): boolean;
    clear(): void;
    update(): CustomEvent<any>;
    everyInterval(n: any): boolean;
    render(): JSX.Element;
}

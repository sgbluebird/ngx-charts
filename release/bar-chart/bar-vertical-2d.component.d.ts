/// <reference types="core-js" />
import { EventEmitter, OnChanges, NgZone, ElementRef, AfterViewInit } from '@angular/core';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { BaseChart } from '../common/base-chart.component';
export declare class BarVertical2D extends BaseChart implements OnChanges, AfterViewInit {
    private element;
    dims: ViewDimensions;
    groupDomain: any[];
    innerDomain: any[];
    valuesDomain: any[];
    groupScale: any;
    innerScale: any;
    valueScale: any;
    transform: string;
    colors: Function;
    margin: number[];
    view: any;
    results: any;
    scheme: any;
    customColors: any;
    legend: boolean;
    xAxis: any;
    yAxis: any;
    showXAxisLabel: any;
    showYAxisLabel: any;
    xAxisLabel: any;
    yAxisLabel: any;
    scaleType: string;
    gradient: boolean;
    clickHandler: EventEmitter<{}>;
    constructor(element: ElementRef, zone: NgZone);
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    update(): void;
    getGroupScale(): any;
    getInnerScale(): any;
    getValueScale(): any;
    getGroupDomain(): any[];
    getInnerDomain(): any[];
    getValueDomain(): number[];
    groupTransform(group: any): string;
    click(data: any, group: any): void;
    trackBy(index: any, item: any): any;
    setColors(): void;
}

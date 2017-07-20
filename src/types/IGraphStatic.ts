import {IGraph} from "./IGraph";
/**
 * @interface
 * Static function for IGraph interface
 */
export class IGraphStatic {
    /**
     * @static
     * @public
     * Static extension of intersect operation for N graphs
     * @param graphs
     * @returns {IGraph}
     */
    public static intersectN: (graphs: IGraph[])=> IGraph;


    /**
     * @static
     * @public
     * Static extension of union operation for N graphs
     * @param graphs
     * @returns {IGraph}
     */
    public static unionN: (graphs: IGraph[])=> IGraph;
}
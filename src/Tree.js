// src/Tree.js
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";


const Tree = () => {
  const svgRef = useRef();

  // Example data (tree structure)
  const treeData = {
    name: "Root",
    children: [
      {
        name: "Child 1",
        children: [
          { name: "Grandchild 1" },
          { name: "Grandchild 2" },
        ],
      },
      {
        name: "Child 2",
        children: [
          { name: "Grandchild 3" },
        ],
      },
    ],
  };

  useEffect(() => {
    // Set up the dimensions of the SVG container
    const width = 600;
    const height = 400;

    // Set up the tree layout
    const treeLayout = d3.tree().size([height, width]);

    // Create the tree hierarchy from the data
    const root = d3.hierarchy(treeData);
    const tree = treeLayout(root);

    // Select the SVG element and set its dimensions
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("border", "1px solid black");

    // Create links between nodes (edges)
    svg
      .selectAll(".link")
      .data(tree.links())
      .enter()
      .append("line")
      .attr("class", "link")
      .attr("x1", d => d.source.y)
      .attr("y1", d => d.source.x)
      .attr("x2", d => d.target.y)
      .attr("y2", d => d.target.x)
      .style("stroke", "#ccc")
      .style("stroke-width", 2);

    // Create nodes (circles)
    const nodes = svg
      .selectAll(".node")
      .data(tree.descendants())
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${d.y}, ${d.x})`);

    nodes
      .append("circle")
      .attr("r", 10)
      .style("fill", "#69b3a2");

    nodes
      .append("text")
      .attr("dx", 12)
      .attr("dy", 4)
      .text(d => d.data.name)
      .style("font-size", "12px");

  }, []);

  return <svg ref={svgRef}></svg>;
};

export default Tree;

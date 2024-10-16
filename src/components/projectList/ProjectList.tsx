/* eslint-disable react/prop-types */
import React from 'react';
import Masonry from 'masonry-layout';

import { Component } from 'react';
import { MyProject } from '../portfolio/Portfolio';

import './ProjectList.css';

type ProjectListProps = {
  projects: MyProject[]
}

export class ProjectList extends Component<ProjectListProps> {
  componentDidMount(): void {
    this.initializeMasonry();
  }

  componentDidUpdate(): void {
    this.initializeMasonry();
  }

  initializeMasonry() {
    new Masonry('.projects', {
      itemSelector: '.project-item',
      columnWidth: '.project-item',
      gutter: 10,
      percentPosition: true,
    });
  }

  render() {
    const { projects } = this.props;
    return (
      <div className='projects'>
        {projects.map((p, index) => (
          <div className='project-item'>
            <img key={index} src={`${p.img}`} className='project_img' />
          </div>
        ))}    
      </div>
    );
  }
}

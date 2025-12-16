import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      items: [
        'module1/introduction-to-ros2',
        'module1/ros2-nodes-and-topics',
        'module1/ros2-services-and-actions',
        'module1/ros2-launch-systems',
        'module1/ros2-ecosystem-and-tools'
      ],
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin (Gazebo & Unity)',
      items: [
        'module2/introduction-to-digital-twins',
        'module2/gazebo-simulation-environment',
        'module2/unity-robotic-simulation',
        'module2/physics-modeling-and-robotics',
        'module2/simulation-workflows'
      ],
    },
    {
      type: 'category',
      label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac™)',
      items: [
        'module3/introduction-to-nvidia-isaac',
        'module3/isaac-core-and-navigation',
        'module3/perception-and-sensing',
        'module3/manipulation-and-control',
        'module3/isaac-sim-and-robotics'
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA)',
      items: [
        'module4/introduction-to-vla-systems',
        'module4/visual-perception-and-understanding',
        'module4/language-integration-for-robots',
        'module4/action-generation-and-execution',
        'module4/integrated-vla-applications'
      ],
    },
  ],
};

export default sidebars;

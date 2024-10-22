/*
=========================================================
* Project Page Configuration - v1.0.0
=========================================================

* Description: This file defines the structure of projects for display on the project page.

Coded by [Your Name]

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const imageBaseUrl = "https://your-project-image-url.com/images"; // 替换为实际图片的路径

// 项目数据以字典形式存储
export default {
    "page-features": {
        image: "https://example.com/images/project1.jpg",
        title: "Robotics Navigation System",
        description: "设计了一个自主导航系统，使用LiDAR和SLAM算法导航未知环境。",
        videoUrl: "https://www.youtube.com/watch?v=example1",
        markdownLink: "/projects/robotics-navigation.md",
    },
    "page-headers": {
        image: "https://example.com/images/project2.jpg",
        title: "AI-Based Object Detection",
        description: "在这项项目中，我与团队合作开发了基于AI的目标检测算法，应用于自动驾驶。",
        videoUrl: "https://www.youtube.com/watch?v=example2",
        markdownLink: "/projects/ai-object-detection.md",
    },
    "time-series-analysis": {
        image: "https://example.com/images/personal-project1.jpg",
        title: "Machine Learning for Time Series Analysis",
        description: "使用Python实现机器学习算法进行时间序列预测，处理金融数据。",
        videoUrl: "https://www.youtube.com/watch?v=example3",
        markdownLink: "/projects/time-series-analysis.md",
    },
    "portfolio-website": {
        image: "https://example.com/images/personal-project2.jpg",
        title: "Portfolio Website",
        description: "我开发了个人作品集网站，展示了我在Web开发方面的技能，使用Vue.js和Node.js构建。",
        videoUrl: "https://www.youtube.com/watch?v=example4",
        markdownLink: "/projects/portfolio-website.md",
    }
};


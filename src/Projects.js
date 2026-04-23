function Projects() {
  return (
    <div className="container">
      <h1>My Projects</h1>

      <div className="grid">

        {/* ⭐ FEATURED PROJECT 1 */}
        <div className="card featured">
          <h3>Day-Ahead Power Load Forecasting & Anomaly Detection</h3>
          <p>
            Developed a 24-hour ahead electricity load forecasting system using time-series analysis.
            Implemented anomaly detection to identify unusual consumption patterns.
          </p>

          <a 
            href="https://github.com/NimmakayalaCharitha/Day-Ahead-Power-Load-Forecasting-Anomaly-Detection"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            View on GitHub
          </a>
        </div>

        {/* ⭐ FEATURED PROJECT 2 */}
        <div className="card featured">
          <h3>E-Commerce Product Display (React)</h3>
          <p>
            Built a React-based product display interface with dynamic rendering of product data.
            Implemented routing and reusable components to simulate an e-commerce experience.
          </p>

          <a 
            href="https://github.com/NimmakayalaCharitha/E-Commerce-Product-Display-"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            View on GitHub
          </a>
        </div>

        {/* XML PROJECT */}
        <div className="card">
          <h3>XML Product Catalog System</h3>
          <p>
            Designed a structured product catalog using XML with validation through DTD and XSD.
            Implemented XSLT to transform XML data into a web-viewable format, separating data 
            from presentation.
          </p>

          <a 
            href="https://github.com/NimmakayalaCharitha/xml-product-catalog"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            View on GitHub
          </a>
        </div>

        {/* SALES ANALYSIS PROJECT */}
        <div className="card">
          <h3>Sales Data Analysis</h3>
          <p>
            Performed analysis on sales data using Python to identify trends, patterns, and key insights.
            Applied data preprocessing and visualization techniques to support decision-making.
          </p>

          <a 
            href="https://github.com/NimmakayalaCharitha/python-project-salesanalysis"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            View on GitHub
          </a>

          <p className="collab">
      
          </p>
        </div>

        {/* CREDIT RISK PROJECT */}
        <div className="card">
          <h3>Credit Default Risk Model</h3>
          <p>
            Built a hybrid regression-classification model to predict probability of default 
            and expected financial loss using financial datasets. Focused on data preprocessing, 
            model building, and evaluation techniques.
          </p>
        </div>

        {/* FRIENDSHIP CYCLES PROJECT */}
        <div className="card">
          <h3>Understanding Friendship Cycles: Interaction Decay & Revival</h3>
          <p>
            Analyzed patterns in social interactions to study how friendships evolve over time,
            focusing on interaction decay and revival trends. Explored data-driven approaches 
            to understand relationship dynamics and behavioral patterns.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Projects;
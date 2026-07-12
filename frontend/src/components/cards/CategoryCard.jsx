import "./CategoryCard.css";

function CategoryCard({ icon, title }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="category-card">

        <div className="category-icon">
          {icon}
        </div>

        <h5>{title}</h5>

      </div>
    </div>
  );
}

export default CategoryCard;
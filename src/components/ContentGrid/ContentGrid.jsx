import BoxItem from '../BoxItem/BoxItem';

function ContentGrid() {
    return (
        <div className="content-grid">
            <div className="boxes-row">
                <BoxItem />
                <BoxItem />
                <BoxItem />
            </div>
            <div className="green-bar"></div>
        </div>
);
}

export default ContentGrid;
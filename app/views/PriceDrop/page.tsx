"use client"
import Script from "next/script";

const PriceDropWidget = () => {
    return (
        <div>
            <Script
                src="https://css.cruisebase.com/PriceDrop/Content/js/price-drop-widget.js"
                strategy="afterInteractive"
            />
        </div>
    );
};
export default PriceDropWidget


export default function EmbededMap({ width = "600px", height = "450px" }) {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.7996208864192!2d33.03989215089517!3d34.685006415739565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e733dca27ab0e1%3A0xada89417cd8b7645!2sPhysiotherapist%20Dimitris%20Ioannou!5e0!3m2!1sen!2s!4v1657300739321!5m2!1sen!2s"
      // width={width}
      // height={height}
      style={{
        border: 0,
        maxWidth: width,
        width: "100%",
        height: height,
        margin: "auto",
      }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

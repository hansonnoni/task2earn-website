import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function Waitlist() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    country: "",
    facebook: "no",
    facebookLink: "",
    instagram: "no",
    instagramLink: "",
    youtube: "no",
    youtubeLink: "",
    tiktok: "no",
    tiktokLink: "",
    contactPreference: "",
    reason: "",
    referral: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase
      .from("vip_invitations")
      .insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          whatsapp: formData.whatsapp,
          country: formData.country,

          facebook: formData.facebook,
          facebook_link: formData.facebookLink,

          instagram: formData.instagram,
          instagram_link: formData.instagramLink,

          youtube: formData.youtube,
          youtube_link: formData.youtubeLink,

          tiktok: formData.tiktok,
          tiktok_link: formData.tiktokLink,

          contact_preference: formData.contactPreference,

          reason: formData.reason,
          referral: formData.referral,
        },
      ]);

    setLoading(false);

    if (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
      return;
    }

    alert("Application Submitted Successfully 🚀");

    setFormData({
      fullName: "",
      email: "",
      whatsapp: "",
      country: "",
      facebook: "no",
      facebookLink: "",
      instagram: "no",
      instagramLink: "",
      youtube: "no",
      youtubeLink: "",
      tiktok: "no",
      tiktokLink: "",
      contactPreference: "",
      reason: "",
      referral: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-10 shadow-sm">

        <h1 className="text-4xl font-bold text-center">
          VIP Invitation Program 🚀
        </h1>

        <p className="text-gray-600 text-center mt-4">
          Task2Earn is currently in private testing mode.
          Access is limited to selected early users only.
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 mt-6">

          <h2 className="font-bold text-lg">
            Important Instructions
          </h2>

          <ul className="mt-3 space-y-2 text-gray-700 text-sm">

            <li>
              • Copy your social profile links before starting.
            </li>

            <li>
              • Use only real and active social accounts.
            </li>

            <li>
              • Fake or suspicious applications may be rejected.
            </li>

            <li>
              • Selected users will become early VIP testers before public launch.
            </li>

            <li>
              • Early users may receive rewards, priority access, and invitation benefits.
            </li>

            <li>
              • Applications are reviewed manually by admin.
            </li>

          </ul>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >

          {/* FULL NAME */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full border p-4 rounded-xl"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full border p-4 rounded-xl"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* WHATSAPP */}
          <input
            type="text"
            name="whatsapp"
            placeholder="WhatsApp Number (Optional)"
            className="w-full border p-4 rounded-xl"
            value={formData.whatsapp}
            onChange={handleChange}
          />

          {/* COUNTRY */}
          <input
            type="text"
            name="country"
            placeholder="Country"
            className="w-full border p-4 rounded-xl"
            value={formData.country}
            onChange={handleChange}
            required
          />

          {/* FACEBOOK */}
          <div>

            <label className="font-semibold">
              Do you have Facebook?
            </label>

            <select
              name="facebook"
              className="w-full border p-4 rounded-xl mt-2"
              value={formData.facebook}
              onChange={handleChange}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>

            {formData.facebook === "yes" && (
              <input
                type="text"
                name="facebookLink"
                placeholder="Facebook Profile Link"
                className="w-full border p-4 rounded-xl mt-3"
                value={formData.facebookLink}
                onChange={handleChange}
                required
              />
            )}

          </div>

          {/* INSTAGRAM */}
          <div>

            <label className="font-semibold">
              Do you have Instagram?
            </label>

            <select
              name="instagram"
              className="w-full border p-4 rounded-xl mt-2"
              value={formData.instagram}
              onChange={handleChange}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>

            {formData.instagram === "yes" && (
              <input
                type="text"
                name="instagramLink"
                placeholder="Instagram Profile Link"
                className="w-full border p-4 rounded-xl mt-3"
                value={formData.instagramLink}
                onChange={handleChange}
                required
              />
            )}

          </div>

          {/* YOUTUBE */}
          <div>

            <label className="font-semibold">
              Do you have YouTube Channel?
            </label>

            <select
              name="youtube"
              className="w-full border p-4 rounded-xl mt-2"
              value={formData.youtube}
              onChange={handleChange}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>

            {formData.youtube === "yes" && (
              <input
                type="text"
                name="youtubeLink"
                placeholder="YouTube Channel Link"
                className="w-full border p-4 rounded-xl mt-3"
                value={formData.youtubeLink}
                onChange={handleChange}
                required
              />
            )}

          </div>

          {/* TIKTOK */}
          <div>

            <label className="font-semibold">
              Do you have TikTok?
            </label>

            <select
              name="tiktok"
              className="w-full border p-4 rounded-xl mt-2"
              value={formData.tiktok}
              onChange={handleChange}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>

            {formData.tiktok === "yes" && (
              <input
                type="text"
                name="tiktokLink"
                placeholder="TikTok Profile Link"
                className="w-full border p-4 rounded-xl mt-3"
                value={formData.tiktokLink}
                onChange={handleChange}
                required
              />
            )}

          </div>

          {/* CONTACT PREFERENCE */}
          <div>

            <label className="font-semibold">
              Where should we contact you if approved?
            </label>

            <select
              name="contactPreference"
              className="w-full border p-4 rounded-xl mt-2"
              value={formData.contactPreference}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Contact Method
              </option>

              <option value="email">
                Email
              </option>

              <option value="whatsapp">
                WhatsApp
              </option>

              <option value="instagram">
                Instagram
              </option>

              <option value="facebook">
                Facebook
              </option>

            </select>

          </div>

          {/* REASON */}
          <textarea
            name="reason"
            placeholder="Why do you want to join Task2Earn?"
            className="w-full border p-4 rounded-xl h-32"
            value={formData.reason}
            onChange={handleChange}
            required
          />

          {/* REFERRAL */}
          <input
            type="text"
            name="referral"
            placeholder="Referral Code (Optional)"
            className="w-full border p-4 rounded-xl"
            value={formData.referral}
            onChange={handleChange}
          />

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-4 rounded-2xl text-lg font-semibold"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>

          <p className="text-sm text-gray-500 text-center mt-4">
            Applications are reviewed manually.
            Approved users will receive invitation access before public launch.
          </p>

        </form>

      </div>
    </div>
  );
}
import { redirect, useSubmit } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import customFetch from "../utils/customFetch";

export async function action({ params }) {
  try {
    await customFetch.delete(`/jobs/${params.id}`);
    toast.success("Job deleted successfully");
  } catch (error) {
    toast.error(error?.response?.data?.msg || "Something went wrong");
  }
  return redirect("/dashboard/all-jobs");
}

export default function DeleteJobButton({
  jobId,
  className = "btn delete-btn",
}) {
  const submit = useSubmit();

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This job will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      customClass: {
        popup: "jobify-popup",
        title: "jobify-title",
        confirmButton: "jobify-confirm",
        cancelButton: "jobify-cancel",
      },
    });


    if (result.isConfirmed) {
      submit(null, {
        method: "post",
        action: `/dashboard/delete-job/${jobId}`,
      });
    }
  };

  return (
    <button type="button" className={className} onClick={handleDelete}>
      Delete
    </button>
  );
}

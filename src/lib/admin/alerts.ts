import Swal from "sweetalert2";

const DANGER = "#dc2626";
const NEUTRAL = "#6b7280";

/** SweetAlert confirmation dialog (replaces window.confirm). Resolves to true when the user confirms. */
export async function confirmAction(
  message: string,
  { title = "Are you sure?", confirmText = "Yes, delete it", icon = "warning" as "warning" | "question", confirmColor = DANGER } = {},
): Promise<boolean> {
  const result = await Swal.fire({
    icon,
    title,
    text: message,
    showCancelButton: true,
    confirmButtonText: confirmText,
    cancelButtonText: "Cancel",
    confirmButtonColor: confirmColor,
    cancelButtonColor: NEUTRAL,
    focusCancel: true,
  });
  return result.isConfirmed;
}

/** SweetAlert message dialog (replaces window.alert). */
export async function showAlert(message: string, { title = "Something went wrong", icon = "error" as "error" | "info" } = {}) {
  await Swal.fire({ icon, title, text: message, confirmButtonColor: NEUTRAL });
}

function FormWrapper({
  form,
  isLoading,
  availableIcons,
  onSubmit,
  onCloseDialog,
}) {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          onSubmit(data);
          onCloseDialog(); // 🎯 aquí cerramos el diálogo
          form.reset();
        })}
        className="space-y-4"
      >
        {/* tus campos aquí */}
        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

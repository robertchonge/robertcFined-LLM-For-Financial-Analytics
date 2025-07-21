from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import FinancialUploadSerializer
from .parsers import parse_csv, parse_excel, parse_pdf
from .llm_insights import generate_insights

class UploadFinancialFile(APIView):
    def post(self, request):
        serializer = FinancialUploadSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        file = serializer.validated_data['file']
        file_type = serializer.validated_data['file_type']

        if file_type == 'csv':
            df = parse_csv(file)
        elif file_type == 'xlsx':
            df = parse_excel(file)
        elif file_type == 'pdf':
            df = parse_pdf(file)
        else:
            return Response({'error': 'Unsupported file type.'}, status=400)

        text_chunk = df.to_string(index=False)
        insights = generate_insights(text_chunk[:10000])  # Avoid token limits

        return Response({
            'rows': len(df),
            'columns': list(df.columns),
            'insights': insights
        })

